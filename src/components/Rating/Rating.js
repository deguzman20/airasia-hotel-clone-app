import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MDBBadge } from "mdb-react-ui-kit";

export default function Rating({ rating, overAllRatings, numberOfReviews }) {
  const { t } = useTranslation(["common"]);
  return (
    <>
      <StyledMDBBadge>{overAllRatings}/5</StyledMDBBadge>
      <StyledRatingLabel>{t(rating)}</StyledRatingLabel>&nbsp;&nbsp;
      <StyledTotalReviewLabel>
        ({numberOfReviews} {t("reviews")}
      </StyledTotalReviewLabel>
      )
    </>
  );
}

const StyledMDBBadge = styled(MDBBadge)`
  background-color: ${({ theme }) => theme.colors.governorBay} !important;
  border-radius: ${({ theme }) => theme.pxToRem(3)} !important;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.pxToRem(20)};
`;

const StyledRatingLabel = styled.span`
  color: ${({ theme }) => theme.colors.governorBay};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  opacity: 1;
  margin-left: ${({ theme }) => theme.pxToRem(5)};
`;

const StyledTotalReviewLabel = styled.span`
  display: inline-flex;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.stormGray};
  opacity: 1;
`;
