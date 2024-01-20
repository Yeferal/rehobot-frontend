'use client'

import { subDays } from "date-fns";
import { FaAd, FaAddressCard } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

export type CryptoOrderStatus = 'completed' | 'pending' | 'failed';

export interface CryptoOrder {
    id: string;
    status: CryptoOrderStatus;
    orderDetails: string;
    orderDate: number;
    orderID: string;
    sourceName: string;
    sourceDesc: string;
    amountCrypto: number;
    amount: number;
    cryptoCurrency: string;
    currency: string;
  }

export default function TableExample() {
    const cryptoOrders: CryptoOrder[] = [
        {
          id: '1',
          orderDetails: 'Fiat Deposit',
          orderDate: new Date().getTime(),
          status: 'completed',
          orderID: 'VUVX709ET7BY',
          sourceName: 'Bank Account',
          sourceDesc: '*** 1111',
          amountCrypto: 34.4565,
          amount: 56787,
          cryptoCurrency: 'ETH',
          currency: '$'
        },
        {
          id: '2',
          orderDetails: 'Fiat Deposit',
          orderDate: subDays(new Date(), 1).getTime(),
          status: 'completed',
          orderID: '23M3UOG65G8K',
          sourceName: 'Bank Account',
          sourceDesc: '*** 1111',
          amountCrypto: 6.58454334,
          amount: 8734587,
          cryptoCurrency: 'BTC',
          currency: '$'
        },
        {
          id: '3',
          orderDetails: 'Fiat Deposit',
          orderDate: subDays(new Date(), 5).getTime(),
          status: 'failed',
          orderID: 'F6JHK65MS818',
          sourceName: 'Bank Account',
          sourceDesc: '*** 1111',
          amountCrypto: 6.58454334,
          amount: 8734587,
          cryptoCurrency: 'BTC',
          currency: '$'
        },
        {
          id: '4',
          orderDetails: 'Fiat Deposit',
          orderDate: subDays(new Date(), 55).getTime(),
          status: 'completed',
          orderID: 'QJFAI7N84LGM',
          sourceName: 'Bank Account',
          sourceDesc: '*** 1111',
          amountCrypto: 6.58454334,
          amount: 8734587,
          cryptoCurrency: 'BTC',
          currency: '$'
        },
        {
          id: '5',
          orderDetails: 'Fiat Deposit',
          orderDate: subDays(new Date(), 56).getTime(),
          status: 'pending',
          orderID: 'BO5KFSYGC0YW',
          sourceName: 'Bank Account',
          sourceDesc: '*** 1111',
          amountCrypto: 6.58454334,
          amount: 8734587,
          cryptoCurrency: 'BTC',
          currency: '$'
        },
        {
          id: '6',
          orderDetails: 'Fiat Deposit',
          orderDate: subDays(new Date(), 33).getTime(),
          status: 'completed',
          orderID: '6RS606CBMKVQ',
          sourceName: 'Bank Account',
          sourceDesc: '*** 1111',
          amountCrypto: 6.58454334,
          amount: 8734587,
          cryptoCurrency: 'BTC',
          currency: '$'
        },
        {
          id: '7',
          orderDetails: 'Fiat Deposit',
          orderDate: new Date().getTime(),
          status: 'pending',
          orderID: '479KUYHOBMJS',
          sourceName: 'Bank Account',
          sourceDesc: '*** 1212',
          amountCrypto: 2.346546,
          amount: 234234,
          cryptoCurrency: 'BTC',
          currency: '$'
        },
        {
          id: '8',
          orderDetails: 'Paypal Withdraw',
          orderDate: subDays(new Date(), 22).getTime(),
          status: 'completed',
          orderID: 'W67CFZNT71KR',
          sourceName: 'Paypal Account',
          sourceDesc: '*** 1111',
          amountCrypto: 3.345456,
          amount: 34544,
          cryptoCurrency: 'BTC',
          currency: '$'
        },
        {
          id: '9',
          orderDetails: 'Fiat Deposit',
          orderDate: subDays(new Date(), 11).getTime(),
          status: 'completed',
          orderID: '63GJ5DJFKS4H',
          sourceName: 'Bank Account',
          sourceDesc: '*** 2222',
          amountCrypto: 1.4389567945,
          amount: 123843,
          cryptoCurrency: 'BTC',
          currency: '$'
        },
        {
          id: '10',
          orderDetails: 'Wallet Transfer',
          orderDate: subDays(new Date(), 123).getTime(),
          status: 'failed',
          orderID: '17KRZHY8T05M',
          sourceName: 'Wallet Transfer',
          sourceDesc: "John's Cardano Wallet",
          amountCrypto: 765.5695,
          amount: 7567,
          cryptoCurrency: 'ADA',
          currency: '$'
        }
      ];

  return (
    <div className="row align-items-stretch">
        <div className="col-md-12">
            <div className="card shadow mb-4">
                <div className="card-header d-flex justify-content-center align-items-center py-3 ">
                    <h6 className="m-0 font-weight-bold text-primary">Table Example</h6>
                </div>
                <div className="card-body p-0">
                    <div className="container-table table-responsive table-hover">
                        <table className="table" id="dataTable">
                            <thead>
                                <tr>
                                    <th className="text-left"><input type="checkbox"/></th>
                                    <th className="text-left">Order Details</th>
                                    <th className="text-left">Order ID</th>
                                    <th className="text-left">Source</th>
                                    <th align="right" >Amount</th>
                                    <th align="right">Status</th>
                                    <th align="right">Actions</th>
                                </tr>
                            </thead>
                            {/* <tfoot>
                                <tr>
                                    <th><input type="checkbox"/></th>
                                    <th>Order Details</th>
                                    <th>Order ID</th>
                                    <th>Source</th>
                                    <th className="text-right">Amount</th>
                                    <th className="text-right">Status</th>
                                    <th className="text-right">Actions</th>
                                </tr>
                            </tfoot> */}

                            <tbody>
                                {cryptoOrders.map((cryptoOrder) => {
                                    // const isCryptoOrderSelected = selectedCryptoOrders.includes(
                                    //     cryptoOrder.id
                                    // );
                                    return (
                                        <tr key={cryptoOrder.id}>
                                            <td > <input type="checkbox"/></td>
                                            <td data-title='Order Details'>{cryptoOrder.orderDetails}</td>
                                            <td data-title="Order ID">{cryptoOrder.orderID}</td>
                                            <td data-title="Source">{cryptoOrder.sourceName}</td>
                                            <td data-title="Amount" align="right" >
                                                <span className="d-block typography-body1 gutters-bottom text-wrap">
                                                    Tipografia Body1
                                                </span>
                                                <span className="d-block typography-body2 text-wrap">
                                                    Tipografia Body2
                                                </span>
                                            </td>
                                            <td data-title="Status" align="right"> {cryptoOrder.status}</td>
                                            <td  align="right">
                                                <button className="btn btn-primary btn-sqr btn-sm">
                                                <FaAddressCard/>    
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Contenedor de la paginacion */}
                    <div 
                    className="d-flex flex-column justify-content-center align-items-center px-2 pb-2">
                        <div className="mb-2">
                            <span className="typography-body1 font-weight-normal">Mostrando 1-5 de 10</span>
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                            <button className="btn btn-light btn-sqr btn-sm mr-1">
                                <IoIosArrowBack/>
                            </button>
                            <div>
                                <button className="btn btn-primary btn-sqr btn-sm mr-1">1</button>
                                <button className="btn btn-light btn-sqr btn-sm mr-1">2</button>
                                <button className="btn btn-light btn-sqr btn-sm mr-1">3</button>
                                <button className="btn btn-light btn-sqr btn-sm mr-1 disabled" disabled>...</button>
                                <button className="btn btn-light btn-sqr btn-sm mr-1">4</button>
                            </div>
                            <button className="btn btn-light btn-sqr btn-sm">
                                <IoIosArrowForward/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
