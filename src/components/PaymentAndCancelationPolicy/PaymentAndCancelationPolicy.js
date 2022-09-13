import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBIcon } from "mdbreact";

export default function PaymentAndCancelationPolicy({
  paymentAndCancelationPolicy,
}) {
  const { t } = useTranslation(["policy"]);
  return (
    <MDBRow>
      {paymentAndCancelationPolicy.map(({ policy, icon }) => (
        <MDBCol md="6" key={policy}>
          <StyledMDBIcon icon={icon} />
          &nbsp;&nbsp;&nbsp;
          <StyledPolicyLabel>{t(policy)}</StyledPolicyLabel>
        </MDBCol>
      ))}
    </MDBRow>
  );
}

const StyledPolicyLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  line-height: ${({ theme }) => theme.pxToRem(16)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primaryGreen};
  align-items: center;
`;

const StyledMDBIcon = styled(MDBIcon)`
  color: ${({ theme }) => theme.colors.primaryGreen};
`;
