import React from "react";

import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import UsersTable from "../components/usersTable";

const Users = () => {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: () =>
            newRequest
                .get(`/users`)
                .then((res) => {
                    return res.data;
                })
                .catch((e) => console.log(e)),
    });

    return (
        <>
            <div className="w-full my-10 mx-10">
                <h2 className="text-xl font-semibold my-8 text-center">
                    Users
                </h2>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="">
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                ID
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Username
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Email
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Mobile
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Branch
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                role
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 ">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {isLoading
                        ? "loading..."
                        : error
                        ? "Something went wrong..."
                        : data.data.map((user, idx) => (
                              <UsersTable
                                  refetch={refetch}
                                  idx={idx}
                                  key={user._id}
                                  user={user}
                              />
                          ))}
                </table>
            </div>
        </>
    );
};

export default Users;
