import Image from "next/image";
interface Props{
    size?: "small" | "medium" | "large"
}

export const Avatar =({size="medium"}:Props)=>{
    let sizeStyles: string;

    switch(size)
    {
        case "small":
            sizeStyles="";
            break;
        case "medium":
            sizeStyles="";
            break;
        case "large":
            sizeStyles="";
            break;
    }

 return(
    <div>
    <Image src="/images/img.png" alt="photo licoln" width={50} height={50} className="rounded-full"/>
    </div>
 )

}