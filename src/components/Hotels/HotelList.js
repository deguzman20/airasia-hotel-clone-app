import { useMemo } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import HotelListItem from "./HotelListItem";
import { hotels } from "../../dummy_data";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

const HotelList = ({ minValue, maxValue, itemCount }) => {
  const { t } = useTranslation(["common"]);

  const memoizeValue = useMemo(() => {
    if (maxValue !== 0) {
      return hotels
        .filter(
          (hotel) =>
            hotel.perNightPrice >= minValue && maxValue >= hotel.perNightPrice
        )
        .slice(0, itemCount);
    }

    return hotels.slice(0, itemCount);
  }, [minValue, maxValue, itemCount]);

  return (
    <>
      {!!memoizeValue.length ? (
        memoizeValue.map((hotel, index) => (
          <div key={index}>
            <HotelListItem {...hotel} />
            <br />
          </div>
        ))
      ) : (
        <StyledContainer>
          <MDBRow>
            <MDBCol md="12">
              <img
                src="https://www.airasia.com/hotel-app/static/media/general_error_image.0a34c569.svg"
                alt="alt"
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <BoldLabel>{t("Uh-oh. There are no hotels")}</BoldLabel>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              {t("Looks like there are no hotels for the selected filters")}
            </MDBCol>
          </MDBRow>
        </StyledContainer>
      )}
    </>
  );
};

export default HotelList;

const StyledContainer = styled(MDBContainer)`
  text-align: center;
`;

const BoldLabel = styled.div`
  font-weight: 500;
  cursor: inherit;
  white-space: inherit;
  color: rgb(33, 33, 36);
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 8px;
`;
