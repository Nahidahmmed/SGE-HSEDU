import Image from "next/image";

const UniversityCard = ({ item }) => {
  return (
    <article className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-md transition w-[340px] mx-auto">
      {/* Cover */}
      <div className="relative lg:w-[340px] md:w-[340px] w-full h-[225px]">
        <Image
          src={item.cover}
          alt={`${item.name} cover`}
          fill
          className="object-cover"
          // Load smaller images on small screens, larger on desktop
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 25vw"
          priority={item.id <= 6}
        />
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-3 sm:gap-4">
          <Image
            src={item.logo}
            alt={`${item.name} logo`}
            width={48}
            height={48}
            className="rounded-full shrink-0 object-cover w-10 h-10 sm:w-12 sm:h-12"
          />
          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-[#2a2f3e] leading-tight truncate">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5 truncate">
              {item.title}
            </p>
          </div>
        </div>

        <p className="text-left text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4 line-clamp-3">
          {item.text}
        </p>
      </div>
    </article>
  );
};
export default UniversityCard;