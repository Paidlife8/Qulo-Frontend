"use client";
import { formatAmount, formatDate, formatTime } from "@/hooks/formatAmount";
import React from "react";

const TransactionTable = ({ transactions, profile }) => {
  return (
    <div className="row">
      <div className="col-md-12  col-sm-9 col-xs-12">
        <div className="dashboard-content">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="send-money-form transection-log">
                <div className="form-text">
                  <h4 className="form-top">Transection Log</h4>
                  <div className="form-inner table-inner">
                    <table>
                      <thead>
                        <tr>
                          <th scope="col">Name/ Business</th>
                          <th scope="col">Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions?.length > 0 &&
                          transactions?.map((item) => (
                            <tr>
                              <th scope="row">
                                <p>{item?.accountName}</p>
                                <p className="mdr">{item?.bankName}</p>
                              </th>
                              <td>
                                <p>{formatTime(`${item?.createdAt}`)}</p>
                                <p className="mdr">
                                  {formatDate(`${item?.createdAt}`)}
                                </p>
                              </td>
                              <td>
                                {item?.transactionStatus === "completed" && (
                                  <p className="completed">completed</p>
                                )}
                                {item?.transactionStatus === "pending" && (
                                  <p className="pending">pending</p>
                                )}
                                {item?.transactionStatus === "failed" && (
                                  <p className="cancelled">Failed</p>
                                )}
                              </td>
                              <td>
                                <p>-${formatAmount(`${item?.amount}`)}</p>
                                {profile?._id === item?.receiverId ? (
                                  <p className="completed">Received</p>
                                ) : (
                                  <p className="mdr">
                                    ${formatAmount(`${item?.senderBalance}`)}
                                  </p>
                                )}
                              </td>
                            </tr>
                          ))}
                        {transactions?.length === 0 && (
                          <>
                            <p>No transactions yet</p>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
