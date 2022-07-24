import { twMerge } from 'tailwind-merge';

type Props = {
  src: string;
  title: string;
  gameName: string;
  width: string;
  className?: string;
};

export const ModImage = (props: Props) => (
  <div
    className={twMerge(
      'relative flex justify-center overflow-hidden',
      props.className
    )}
  >
    <img
      className="object-contain object-top shadow-xl shadow-black brightness-75"
      src={props.src}
      width={props.width}
    />
    <div className="absolute bottom-4 flex flex-col items-center gap-4">
      <h2 className="text-4xl font-normal text-shadow">{props.title}</h2>
      <span className="bg-overlay px-2 rounded text-shadow">
        for {props.gameName}
      </span>
    </div>
  </div>
);