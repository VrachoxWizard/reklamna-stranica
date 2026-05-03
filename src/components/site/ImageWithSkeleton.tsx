"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
}

export function ImageWithSkeleton({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  fill = false,
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {/* Skeleton Loader */}
      {isLoading && (
        <div
          className={`absolute inset-0 bg-stone-200 animate-pulse ${
            fill ? "" : "rounded-inherit"
          }`}
          aria-hidden="true"
        />
      )}

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${fill ? "" : "rounded-inherit"}`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}