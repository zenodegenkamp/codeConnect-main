import React from "react"
import { BsStarFill } from "react-icons/bs"
import imageUrl from "/src/assets/reviews-graph.png"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    return (
        <div className="h-screen font-poppins">
        <section className="p-6 text-gray-300 host-reviews">

        <div className="bg-gray-900 rounded-lg p-4 host-reviews-rating">
          <h2 className="text-2xl">Your reviews</h2>
          <p>
            Last <span className="font-bold">30 days</span>
          </p>
          <img
            className="w-full max-w-xs md:max-w-md mx-auto mt-4"
            src={imageUrl}
            alt="Review graph"
          />
        </div>
      
        <div className="bg-gray-900 rounded-lg p-4 host-reviews-reviews">
          <h3 className="text-xl mb-8">Reviews (2)</h3>
          <div className="flex flex-col gap-8 host-reviews-review-flex">
            {reviewsData.map((review) => (
              <div key={review.id} className="bg-gray-700 rounded-lg p-4 review">
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <BsStarFill className="review-star text-pink-500" key={i} />
                  ))}
                  <div className="info flex items-center">
                    <p className="text-lg font-semibold name">{review.name}</p>
                    <p className="text-gray-500 date">{review.date}</p>
                  </div>
                </div>
                <p className="mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      
      </section>
      </div>
    )
}
