import type { SVGProps } from 'react';
import clsx from 'clsx';
interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "white";
}

export const Spinner = ({ size = "medium", variant = "primary" }: Props)=>{
    let variantStyles: string, sizeStyle: string;

    switch(size)
    {
        case "small":
            sizeStyle="w-5 h-5";
            break;
        case "medium":
            sizeStyle="w-9 h-9";
            break;
        case "large":
            sizeStyle="w-12 h-12";
            break;
    }

    switch(variant)
    {
        case "primary":
            variantStyles="text-primary";
            break;
        case "white":
            variantStyles="text-white";
            break;
    }
    return(<svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(sizeStyle,variantStyles,"animate-spin")}
        viewBox="0 0 24 24"
        role="spinner" 
      >
        <path
          fill="currentColor"
          d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
        >
         
        </path>
      </svg>);
};