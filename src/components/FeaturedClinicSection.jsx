import React from 'react'

export default function FeaturedClinicSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <video
          className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source
            src="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/6807ebb42ffc454196543aaa.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}
