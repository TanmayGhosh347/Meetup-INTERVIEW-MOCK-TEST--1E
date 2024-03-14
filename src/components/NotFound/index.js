import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundParagraph,
  Image,
} from './style'

const NotFound = () => (
  <NotFoundContainer>
    <Image
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page not found</NotFoundHeading>
    <NotFoundParagraph>
      We are sorry, the page you requested could not be found.
    </NotFoundParagraph>
  </NotFoundContainer>
)

export default NotFound
