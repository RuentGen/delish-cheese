import { Icon } from "..";

interface IconButtonProps {
  className: string;
  iconName: string;
  size: number;
  flip?: boolean;
}

/**
 * Renders an icon button component.
 * Please use event.preventDefault() to prevent the default behavior of the button.
 * @param {string} className - The class name to be applied to the button element.
 * @param {string} iconName - The name of the icon to be rendered.
 * @param {number} size - The size of the icon in pixels.
 * @return {JSX.Element} The rendered icon button component.
 */
/** */
const IconButton = ({ className, iconName, size, flip }: IconButtonProps) => {

  return (
    <button className={className}>
      <Icon iconName={iconName} size={size} flip={flip} />
    </button>
  );
}
export default IconButton