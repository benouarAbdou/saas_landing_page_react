import { StarIcon } from "@heroicons/react/16/solid";
const TestimonialsCard = ({ feedback }) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-poppins font-semibold text-xl md:text-start">
        {feedback.content}
      </h1>
      <div className="flex gap-4 items-center md:justify-start justify-center">
        <img
          src={feedback.img}
          alt=""
          className=" md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
        />
        <div className="flex flex-col items-start justify-start">
          <p className="font-poppins font-light text-gray-700">
            {feedback.name}
          </p>
          <div className="flex gap-1">
            {Array.from({ length: feedback.rating }, (_, index) => (
              <StarIcon key={index} className="h-5 w-5 text-black" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
