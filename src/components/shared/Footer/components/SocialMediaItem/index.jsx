// Import Style.
import { SocialMediaItemStyled } from './style';

const SocialMediaItem = ({ icon, href, title }) => {
  return (
    <li>
      <SocialMediaItemStyled
        href={href}
        title={title}>
        {icon}
      </SocialMediaItemStyled>
    </li>
  );
};

export default SocialMediaItem;
