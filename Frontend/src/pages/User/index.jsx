import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Button } from "../../components";
import Header from "../../components/Header";
import axios from "axios";
import './styles.css';

export default function UserProfilePage() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/user');
                setUserData(response.data);
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <Helmet>
                <title>User Profile</title>
                <meta
                    name="description"
                    content="View your user profile details and emotional support options with Comfort Connect."
                />
            </Helmet>
            <div className="w-full bg-light_green-50 py-20 lg:py-8 md:py-5 sm:py-4">
                <div className="mb-1 flex flex-col items-center">
                    <div className="container-xs lg:px-5 md:px-5">
                        <Header />
                        <div className="relative h-auto">
                            <div className="absolute left-0 right-0 top-[12%] m-auto flex flex-1 flex-col items-start gap-[50px]">
                                <div className="flex flex-col items-center bg-black p-4">
                                    {/* You can add any additional content here */}
                                </div>
                                <div className="overflow-x-auto w-full">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr className="w-full bg-gray-200 border-b">
                                                <th className="py-2 px-4 text-left">Field</th>
                                                <th className="py-2 px-4 text-left">Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Username:</strong></td>
                                                <td className="py-2 px-4">{userData.username}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Name:</strong></td>
                                                <td className="py-2 px-4">{userData.firstName} {userData.lastName}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Email:</strong></td>
                                                <td className="py-2 px-4">{userData.email}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Phone:</strong></td>
                                                <td className="py-2 px-4">{userData.phone}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Address:</strong></td>
                                                <td className="py-2 px-4">{`${userData.address.street}, ${userData.address.city}, ${userData.address.state} ${userData.address.postalCode}, ${userData.address.country}`}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Date of Birth:</strong></td>
                                                <td className="py-2 px-4">{userData.dateOfBirth}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Gender:</strong></td>
                                                <td className="py-2 px-4">{userData.gender}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Roles:</strong></td>
                                                <td className="py-2 px-4">{userData.roles.join(', ')}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Newsletter:</strong></td>
                                                <td className="py-2 px-4">{userData.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Email Notifications:</strong></td>
                                                <td className="py-2 px-4">{userData.preferences.notifications.email ? 'Enabled' : 'Disabled'}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>SMS Notifications:</strong></td>
                                                <td className="py-2 px-4">{userData.preferences.notifications.sms ? 'Enabled' : 'Disabled'}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Account Status:</strong></td>
                                                <td className="py-2 px-4">{userData.isActive ? 'Active' : 'Inactive'}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Created At:</strong></td>
                                                <td className="py-2 px-4">{new Date(userData.createdAt).toLocaleString()}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <td className="py-2 px-4"><strong>Updated At:</strong></td>
                                                <td className="py-2 px-4">{new Date(userData.updatedAt).toLocaleString()}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <Button
                                    shape="round"
                                    className="min-w-[222px] rounded-full px-[34px] font-bold bg-orange-500 text-white hover:bg-orange-600 sm:px-4"
                                >
                                    Edit Profile
                                </Button>
                            </div>
                            <Img
                                src="images/user-profile.jpg" // Replace with a suitable user image
                                alt="User Profile Image"
                                className="absolute bottom-0 right-[18px] top-0 my-auto h-[830px] w-[38%] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
