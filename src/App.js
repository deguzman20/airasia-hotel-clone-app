import React, { Suspense, useState, useMemo, useRef } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { priceRange } from "./dummy_data";
import GlobalStyle from "./theme/globalStyles";
import NavBar from "./components/Navbar/Navbar";
import HotelList from "./components/Hotels/HotelList";

export default function App() {
  const [checkBoxValue, setCheckBoxValue] = useState([]);
  const [displayHotelcount, setDisplayHotelCount] = useState(5);
  const [loadingVisibility, setLoadingVisibility] = useState(false);

  const { t } = useTranslation(["common"]);

  const listInnerRef = useRef();

  const pause = (_) => new Promise((resolve) => setTimeout(resolve, _));

  const onScroll = async () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setLoadingVisibility(true);
        await pause(1000);
        setDisplayHotelCount(displayHotelcount + 5);
        setLoadingVisibility(false);
      }
    }
  };

  const getMinAndMaxPrice = (e) => {
    const value = e.target.value.split(",");
    const currentMinimumValue = parseInt(value[0]);
    const currentMaximumValue = parseInt(value[1]);

    setDisplayHotelCount(5);

    if (e.target.checked) {
      setCheckBoxValue((prevState) => [
        ...prevState,
        {
          minimum: currentMinimumValue,
          maximum: currentMaximumValue,
        },
      ]);
    } else {
      setCheckBoxValue(
        checkBoxValue.filter((item) => item.minimum !== currentMinimumValue)
      );
    }
  };

  const price = useMemo(() => {
    const arrOfMimimumPrice = checkBoxValue.map(({ minimum }) => minimum);
    const arrOfMaximumPrice = checkBoxValue.map(({ maximum }) => maximum);
    return {
      minimum: Math.min(...arrOfMimimumPrice),
      maximum: Math.max(...arrOfMaximumPrice),
    };
  }, [checkBoxValue]);

  return (
    <div
      onScroll={onScroll}
      ref={listInnerRef}
      style={{ height: `${window.screen.height}px`, overflowY: "auto" }}
    >
      <Suspense fallback={""}>
        <GlobalStyle />
        <NavBar />
        <br />
        <MDBContainer>
          <br />
          <MDBRow>
            <MDBCol md="3">
              <BudgetLabel>
                {t("Your Budget")}
                <BudgetChildrenLabel> ({t("per guest")})</BudgetChildrenLabel>
              </BudgetLabel>
              <br />
              {priceRange.map(({ minimum, maximum, text }) => (
                <>
                  <MDBCheckbox
                    value={[minimum, maximum]}
                    label={text}
                    onChange={getMinAndMaxPrice}
                  />
                  <br />
                </>
              ))}
            </MDBCol>
            <MDBCol md="9">
              <HotelList
                minValue={checkBoxValue.length === 0 ? 0 : price.minimum}
                maxValue={checkBoxValue.length === 0 ? 0 : price.maximum}
                itemCount={displayHotelcount}
              />
              {loadingVisibility && (
                <MDBCol md="12" style={{ textAlign: "center" }}>
                  <MDBSpinner role="status">
                    <span className="visually-hidden">Loading...</span>
                  </MDBSpinner>
                </MDBCol>
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <br />
        <br />
        <br />
      </Suspense>
    </div>
  );
}

const BudgetLabel = styled.label`
  margin-left: -${({ theme }) => theme.pxToRem(-10)};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.pxToRem(24)};
  cursor: inherit;
  color: ${({ theme }) => theme.colors.blackRussian};
  white-space: inherit;
`;

const BudgetChildrenLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  margin-left: ${({ theme }) => theme.pxToRem(5)};
  color: ${({ theme }) => theme.colors.stormGray};
`;
