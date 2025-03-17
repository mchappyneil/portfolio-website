// src/app/photography/page.js
"use client"; // This is a client component because we’re using useEffect and state
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function PhotographyPage() {
  const [groupedPhotos, setGroupedPhotos] = useState({});

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Query the "photography" collection, ordering by the "position" field
        const q = query(collection(db, "photography"), orderBy("position", "asc"));
        const querySnapshot = await getDocs(q);
        const photos = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Group photos by their "collection" field
        const groups = photos.reduce((acc, photo) => {
          const groupName = photo.collection || "Uncategorized";
          if (!acc[groupName]) {
            acc[groupName] = [];
          }
          acc[groupName].push(photo);
          return acc;
        }, {});

        setGroupedPhotos(groups);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Photography</h1>
      {Object.keys(groupedPhotos).map((groupName) => (
        <div key={groupName} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{groupName}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {groupedPhotos[groupName].map((photo) => (
              <div key={photo.id} className="border rounded overflow-hidden hover:shadow-lg transition">
                <img 
                  src={photo.image} 
                  alt={photo.name} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h3 className="font-bold">{photo.name}</h3>
                  <p className="text-xs italic">Camera: {photo.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
