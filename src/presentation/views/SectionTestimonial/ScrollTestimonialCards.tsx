import * as React from 'react'

import { Card } from '@/components/Card'
import { testimonials } from '@/presentation/views/SectionTestimonial/testimonial'

export function ScrollTestimonialCards() {
  return (
    <div className="relative overflow-x-auto px-4 hide-scroll z-10">
      <div className="flex gap-4 pt-2 px-1">
        {testimonials.map((testimonial, index) => (
          <Card.Root
            key={index}
            className="flex-shrink-0 w-[300px] md:w-[446px] h-[380px] md:h-[340px] bg-white rounded-[24px] p-4 md:py-8 md:px-12 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg"
          >
            <Card.Header className="flex items-center gap-4 mb-4">
              {testimonial.avatar && (
                <img src={testimonial.avatar} alt="" className="w-12 h-12 rounded-full object-cover" />
              )}
              <div>
                <Card.Title className="text-[#F84001] text-lg font-semibold">{testimonial.name}</Card.Title>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                  {testimonial.company && <span> - {testimonial.company}</span>}
                </p>
              </div>
            </Card.Header>

            <Card.Content>
              <p className="text-gray-700 text-sm md:text-[16px] leading-relaxed">{testimonial.testimonial}</p>
            </Card.Content>
          </Card.Root>
        ))}
      </div>
    </div>
  )
}
