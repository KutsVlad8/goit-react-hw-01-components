// import css from './TransactionHistory.module.css';
import {
  Table,
  THead,
  HeadTh,
  TBody,
  BodyTr,
  BodyTd,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <THead>
        <tr>
          <HeadTh>Type</HeadTh>
          <HeadTh>Amount</HeadTh>
          <HeadTh>Currency</HeadTh>
        </tr>
      </THead>

      <TBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <BodyTr key={id}>
            <BodyTd>{type}</BodyTd>
            <BodyTd>{amount}</BodyTd>
            <BodyTd>{currency}</BodyTd>
          </BodyTr>
        ))}
      </TBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
