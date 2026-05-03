import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PerksBaitSite() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Perk’s Bait & Tackle</h1>
        <Button onClick={() => setOpen(!open)} className="bg-white text-blue-900">
          Menu
        </Button>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-4 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')] bg-cover bg-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold">
          Your Trusted Bait & Tackle Shop in Lantana
        </h2>
        <p className="mt-4 text-lg">
          Live bait, quality tackle, expert advice, and great prices for every fishing trip.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button>Visit Us Today</Button>
          <Button className="bg-green-600">Call Now</Button>
          <Button className="bg-orange-500">Get Directions</Button>
        </div>
      </section>

      {/* About */}
      <section className="p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">About Us</h3>
        <p>
          Perk’s Bait & Tackle is a trusted local shop serving anglers with live bait,
          tackle, and expert fishing advice. We pride ourselves on friendly service and
          helping fishermen succeed on the water.
        </p>
      </section>

      {/* Services */}
      <section className="p-6 bg-white">
        <h3 className="text-2xl font-bold mb-4">Products & Services</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {["Live Bait","Saltwater Tackle","Freshwater Tackle","Rod & Reel Essentials","Fishing Accessories","Quick Rod Repairs"].map((item) => (
            <Card key={item}>
              <CardContent className="p-4 font-semibold">{item}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="p-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
        <div className="space-y-3">
          <p>⭐ “Best bait shop around—great prices and service.”</p>
          <p>⭐ “Staff is knowledgeable and always helpful.”</p>
          <p>⭐ “Always fresh bait and quick service.”</p>
        </div>
      </section>

      {/* Contact */}
      <section className="p-6 bg-blue-900 text-white">
        <h3 className="text-2xl font-bold mb-2">Contact</h3>
        <p>302 Wickline Blvd, Lantana, FL 33462</p>
        <p>(561) 582-3133</p>
        <p>Open daily · Closes 7 PM</p>
        <div className="mt-4 flex gap-3">
          <Button className="bg-green-600">Call Now</Button>
          <Button className="bg-orange-500">Get Directions</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 text-sm bg-blue-950 text-white">
        © {new Date().getFullYear()} Perk’s Bait & Tackle Shop
      </footer>
    </div>
  );
}