import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

interface Props {
  size?: "small" | "medium" | "large";
  variant?: "accent" | "secondary" | "outline" | "disabled" | "ico";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?:React.ReactNode;
}

export const Button = ({
  size = "medium",
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
}: Props) => {
    let variantStyles: string= "",
        sizeStyle: string = "",
        iconSize:number =0;
    switch(variant)
    {
        case "accent"://Default
         variantStyles= "bg-primary hover:bg-primary-400 text-white rounded";
         break;
        case "secondary":
            variantStyles= "bg-primary-200 hover:bg-gray-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles="bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
            break;
        case "disabled":
            variantStyles="bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
            break;
        case "ico":
            if(iconTheme==="accent")
            {
                variantStyles="bg-primary hover:bg-primary-400 text-white rounded-full"
            }
            else
             if(iconTheme==="secondary")
             {
                variantStyles="bg-primary-200 hover:bg-primary-300/50 text-primary  rounded-full"
             }
             else
             variantStyles="bg-gray-700 hover:bg-gray-600 text-white rounded-full"

            break;
    }

    switch(size)
    {
        case "small":
            sizeStyle =`text-caption3 font-medium  ${ variant==='ico'? "justify-center flex items-center w-[40px] h-[40px]": 
             "px-[14px] py-[12px]"}`;
            iconSize=18;
            break;
        case "medium"://Default
            sizeStyle=`text-caption2 font-medium ${ variant==='ico'? "justify-center flex items-center w-[50px] h-[50px]" :
                 "px-[18px] py-[15px]"}`;
            iconSize=20
            break;
        case "large":
            sizeStyle=`text-caption1 font-medium ${variant==="ico" ? "justify-center flex items-center w-[60px] h-[60px]":
                 "px-[22px] py-[18px]"}`;
            iconSize=24
            break;
    }

     return(
    <>
    <button type="button" 
            className={clsx(variantStyles,sizeStyle,isLoading && "cursor-wait","relative")}
            onClick={()=>console.log('click')}
            disabled={disabled}>
        {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
                {variant==="accent" || variant ==="ico"? (<Spinner size="small" variant="white"/>):( <Spinner size="small"/>)}
               
            </div>
        )}
    <div className={clsx(isLoading && "invisible")}>

        {icon && variant==="ico"? (<icon.icon size={iconSize}/>):
        (
        <div className={clsx(icon && "flex items-center gap-1")}>
        {icon && iconPosition==="left" && ( <icon.icon size={iconSize} />)}
        {children}
        {icon && iconPosition==="right" && ( <icon.icon size={iconSize} />)}
        </div>
        )
        }
    </div>

    </button>
    </>
);
};
