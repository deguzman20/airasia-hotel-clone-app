import styled from "styled-components";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

export default function Carousel({ images }) {
  return (
    <StyledMDBCarousel showControls fade>
      <MDBCarouselInner>
        {images
          ? images.map(({ src, id }) => (
              <MDBCarouselItem className={id === 1 ? "active" : ""} key={id}>
                <StyledMDBCarouselElement src={src} />
              </MDBCarouselItem>
            ))
          : null}
      </MDBCarouselInner>
    </StyledMDBCarousel>
  );
}

const StyledMDBCarousel = styled(MDBCarousel)`
  @media ${(props) => props.theme.devices.mobileL} {
    height: ${({ theme }) => theme.pxToRem(200)} !important;
  }

  @media ${(props) => props.theme.devices.tablet} {
    width: ${({ theme }) => theme.pxToRem(130)} !important;
    height: ${({ theme }) => theme.pxToRem(300)} !important;
  }

  @media ${(props) => props.theme.devices.laptopS} {
    height: ${({ theme }) => theme.pxToRem(325)} !important;
  }

  @media ${(props) => props.theme.devices.laptopM} {
    height: ${({ theme }) => theme.pxToRem(290)} !important;
  }

  @media ${(props) => props.theme.devices.laptop} {
    width: ${({ theme }) => theme.pxToRem(180)} !important;
    height: ${({ theme }) => theme.pxToRem(216)} !important;
  }
`;

const StyledMDBCarouselElement = styled(MDBCarouselElement)`
  @media ${(props) => props.theme.devices.tablet} {
    width: ${({ theme }) => theme.pxToRem(130)} !important;
    height: ${({ theme }) => theme.pxToRem(300)} !important;
  }

  @media ${(props) => props.theme.devices.laptopS} {
    height: ${({ theme }) => theme.pxToRem(325)} !important;
  }

  @media ${(props) => props.theme.devices.laptopM} {
    height: ${({ theme }) => theme.pxToRem(290)} !important;
  }

  @media ${(props) => props.theme.devices.laptop} {
    width: ${({ theme }) => theme.pxToRem(180)} !important;
    height: ${({ theme }) => theme.pxToRem(216)} !important;
  }
`;
