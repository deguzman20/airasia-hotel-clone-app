import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBIcon } from "mdbreact";

export default function Amenities({ amenities }) {
  const { t } = useTranslation(["amenities"]);

  return (
    <MDBRow>
      {amenities.map(({ amenity, icon }) => (
        <MDBCol md="4" key={amenity}>
          <MDBIcon icon={icon} />
          <StyledAmenitiesLabel>{t(amenity)}</StyledAmenitiesLabel>
        </MDBCol>
      ))}
    </MDBRow>
  );
}

const StyledAmenitiesLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  line-height: ${({ theme }) => theme.pxToRem(16)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.stormGray} !important;
  align-items: center;
  margin-left: ${({ theme }) => theme.pxToRem(10)};
`;
