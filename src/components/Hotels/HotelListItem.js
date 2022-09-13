import styled from "styled-components";
import Carousel from "../Carousel/Carousel";
import Rating from "../Rating/Rating";
import Amenities from "../Amenities/Amenities";
import PaymentAndCancelationPolicy from "../PaymentAndCancelationPolicy/PaymentAndCancelationPolicy";
import { useTranslation } from "react-i18next";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";
import { MDBIcon } from "mdbreact";

export default function HotelListItem({
  name,
  images,
  type,
  amenities,
  rating,
  overAllRatings,
  numberOfReviews,
  paymentAndCancelationPolicy,
  location,
  pointsToEarn,
  perNightPrice,
}) {
  const { t } = useTranslation(["common"]);
  return (
    <StyledMDBCard>
      <MDBRow className="g-0">
        <MDBCol md="3">
          <Carousel images={images} />
        </MDBCol>
        <MDBCol md="9">
          <MDBRow>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>
                  <StyledHotelName>{name}</StyledHotelName>
                  <StyledHotelType>
                    ({type} {t("stars")})
                  </StyledHotelType>
                </MDBCardTitle>
                <MDBCardText>
                  <StyledHotelLocationWrapper>
                    <MDBIcon fas icon="map-marker-alt" />
                    <StyledHotelLocationLabel>
                      {location}
                    </StyledHotelLocationLabel>
                  </StyledHotelLocationWrapper>
                </MDBCardText>
                <MDBCardText>
                  <Rating
                    rating={rating}
                    overAllRatings={overAllRatings}
                    numberOfReviews={numberOfReviews}
                  />
                </MDBCardText>
                <MDBCardText>
                  <Amenities amenities={amenities} />
                </MDBCardText>
                <MDBCardText>
                  <PaymentAndCancelationPolicy
                    paymentAndCancelationPolicy={paymentAndCancelationPolicy}
                  />
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
            <StyledPriceCol md="4">
              <MDBContainer>
                <MDBRow>
                  <StyledPointsToEarnLabel>
                    {t("Earn")} {pointsToEarn} {t("airasia points")}
                  </StyledPointsToEarnLabel>
                </MDBRow>
                <MDBRow>
                  <StyledSpan>
                    <CurrencyLabel>MYR</CurrencyLabel>
                    <PriceLabel>{perNightPrice}</PriceLabel>
                  </StyledSpan>
                </MDBRow>
                <MDBRow>
                  <RoomPerNightLabel>
                    {t("per room per night")}
                  </RoomPerNightLabel>
                </MDBRow>
              </MDBContainer>
            </StyledPriceCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </StyledMDBCard>
  );
}

const StyledMDBCard = styled(MDBCard)`
  background-color: ${({ theme }) => theme.colors.neutralWhite} !important;

  @media ${(props) => props.theme.devices.mobileL} {
    height: ${({ theme }) => theme.pxToRem(520)} !important;
  }

  @media ${(props) => props.theme.devices.tablet} {
    height: ${({ theme }) => theme.pxToRem(300)} !important;
  }

  @media ${(props) => props.theme.devices.laptopS} {
    height: ${({ theme }) => theme.pxToRem(325)} !important;
  }

  @media ${(props) => props.theme.devices.laptopM} {
    height: ${({ theme }) => theme.pxToRem(290)} !important;
  }

  @media ${(props) => props.theme.devices.laptop} {
    height: ${({ theme }) => theme.pxToRem(216)} !important;
  }
`;

const StyledHotelName = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.s};
  display: inline;
  color: ${({ theme }) => theme.colors.russianBlack};
`;

const StyledHotelType = styled.div`
  display: inline;
  padding-left: ${({ theme }) => theme.pxToRem(5)};
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.gunPowder};
`;

const StyledHotelLocationWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const StyledHotelLocationLabel = styled.span`
  margin-left: ${({ theme }) => theme.pxToRem(5)};
`;

const StyledPriceCol = styled(MDBCol)`
  @media ${(props) => props.theme.devices.tablet} {
    height: ${({ theme }) => theme.pxToRem(380)} !important;
  }

  @media ${(props) => props.theme.devices.laptopS} {
    border-left: ${({ theme }) => theme.pxToRem(0.5)} solid silver;
    height: ${({ theme }) => theme.pxToRem(325)} !important;
  }

  @media ${(props) => props.theme.devices.laptopM} {
    border-left: ${({ theme }) => theme.pxToRem(0.5)} solid silver;
    height: ${({ theme }) => theme.pxToRem(290)} !important;
  }

  @media ${(props) => props.theme.devices.laptop} {
    border-left: ${({ theme }) => theme.pxToRem(0.5)} solid silver;
    height: ${({ theme }) => theme.pxToRem(216)} !important;
  }
`;

const StyledPointsToEarnLabel = styled.div`
  @media ${(props) => props.theme.devices.mobileS} {
    display: none;
  }

  @media ${(props) => props.theme.devices.tablet} {
    display: block;
  }

  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.royalBlue};
  text-align: center;
  position: relative;
  top: ${({ theme }) => theme.pxToRem(30)};
`;

const StyledSpan = styled.span`
  display: inline-flex;
  align-items: baseline;
  position: relative;

  @media ${(props) => props.theme.devices.mobileL} {
    left: 80%;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    top: ${({ theme }) => theme.pxToRem(170)};
    left: 10%;
  }

  @media (min-width: 993px) and (max-width: 1023px) {
    top: ${({ theme }) => theme.pxToRem(215)};
    left: 20%;
  }

  @media ${(props) => props.theme.devices.laptop} {
    left: 0%;
  }
`;

const PriceLabel = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: "DM Sans", Roboto;
  font-size: ${({ theme }) => theme.fontSizes.l};
  color: ${({ theme }) => theme.colors.blackRussian};
  text-decoration: none;
  text-align: initial;
  line-height: ${({ theme }) => theme.pxToRem(30)};
  opacity: 1;
  position: relative;

  @media ${(props) => props.theme.devices.laptopM} {
    top: ${({ theme }) => theme.pxToRem(100)};
    left: 50%;
  }
`;

const CurrencyLabel = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: "DM Sans", Roboto;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.blackRussian};
  line-height: ${({ theme }) => theme.pxToRem(18)};
  opacity: 1;
  position: relative;

  @media ${(props) => props.theme.devices.laptopM} {
    top: ${({ theme }) => theme.pxToRem(100)};
    left: 46%;
  }
`;

const RoomPerNightLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  line-height: 150%;
  text-align: right;
  color: ${({ theme }) => theme.colors.blackRussian};
  text-align: center;
  position: relative;

  @media ${(props) => props.theme.devices.mobileL} {
    left: 35%;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    top: ${({ theme }) => theme.pxToRem(155)};
    left: 0%;
  }

  @media ${(props) => props.theme.devices.laptopS} {
    top: ${({ theme }) => theme.pxToRem(200)};
  }

  @media ${(props) => props.theme.devices.laptopM} {
    top: ${({ theme }) => theme.pxToRem(100)};
  }

  @media ${(props) => props.theme.devices.laptop} {
    left: 0%;
  }
`;
