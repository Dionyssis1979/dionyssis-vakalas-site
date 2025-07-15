import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen bg-cover bg-center flex items-center justify-center text-center p-10" style={{ backgroundImage: 'url(https://via.placeholder.com/1500x800)' }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Dionyssis Vakalas Models</h1>
          <p className="text-xl text-gray-200">Scale Models & Aftermarket Parts for Hobbyists and Collectors</p>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Products</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Scale Models</h3>
              <p className="text-gray-700">Handcrafted models including vehicles, dioramas, and more — each with meticulous detail and historical accuracy.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Aftermarket Parts</h3>
              <p className="text-gray-700">High-quality custom parts for enhancing your own model kits — perfect for modelers seeking authenticity and detail.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <img
              key={i}
              src={`https://via.placeholder.com/400x300?text=Model+${i + 1}`}
              alt={`Model ${i + 1}`}
              className="rounded-xl shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">About Dionyssis</h2>
        <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg">
          <p>
            Dionyssis Vakalas is a passionate scale modeler with a focus on craftsmanship, historical accuracy, and creative expression. With years of experience, his work blends fine detail with storytelling — from military dioramas to intricate vehicle replicas.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded border" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded border" />
          <textarea placeholder="Message" className="w-full p-3 rounded border" rows={5}></textarea>
          <Button className="w-full bg-black text-white hover:bg-gray-800">Send Message</Button>
        </form>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dionyssis Vakalas Models. All rights reserved.
      </footer>
    </main>
  );
}

export const metadata = {
  title: "Dionyssis Vakalas Models",
  description: "Scale Models & Aftermarket Parts for Hobbyists and Collectors",
};