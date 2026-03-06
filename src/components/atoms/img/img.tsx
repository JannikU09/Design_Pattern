import "./img.css";

export const Img = ({
    height,
    width,
}: {
    height: number;
    width: number;
}) => {

    const img = document.getElementById("img") as HTMLElement;

    if(img){
        img.style.height = `${height}px`;
        img.style.height = `${width}px`;
    }

    return (
        <img src="https://picsum.photos/200/" id="img"/>
    )
}
