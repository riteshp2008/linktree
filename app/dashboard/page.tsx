"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { FaLink, FaChartBar, FaUserCircle, FaPlus } from "react-icons/fa";

// Mock data for links
const initialLinks = [
  { id: 1, title: "My Website", url: "https://mywebsite.com", clicks: 150 },
  { id: 2, title: "Twitter", url: "https://twitter.com/myhandle", clicks: 89 },
  {
    id: 3,
    title: "Latest Blog Post",
    url: "https://myblog.com/latest",
    clicks: 42,
  },
];

export default function Dashboard() {
  const [links, setLinks] = useState(initialLinks);
  const [newLink, setNewLink] = useState({ title: "", url: "" });

  const addLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (newLink.title && newLink.url) {
      setLinks([...links, { ...newLink, id: Date.now(), clicks: 0 }]);
      setNewLink({ title: "", url: "" });
    }
  };

  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Analytics Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <FaChartBar className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Clicks
                      </dt>
                      <dd className="text-3xl font-semibold text-gray-900">
                        {links.reduce((acc, link) => acc + link.clicks, 0)}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                    <FaUserCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Profile Views
                      </dt>
                      <dd className="text-3xl font-semibold text-gray-900">
                        1,234
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* Add New Link Card */}
            <form
              onSubmit={addLink}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                  Add New Link
                </h3>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full p-2 mb-2 border rounded"
                  value={newLink.title}
                  onChange={(e) =>
                    setNewLink({ ...newLink, title: e.target.value })
                  }
                  required
                />
                <input
                  type="url"
                  placeholder="URL"
                  className="w-full p-2 mb-2 border rounded"
                  value={newLink.url}
                  onChange={(e) =>
                    setNewLink({ ...newLink, url: e.target.value })
                  }
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  <FaPlus className="inline mr-2" /> Add Link
                </button>
              </div>
            </form>
          </div>

          {/* Links List */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Your Links
            </h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                {links.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} className="block hover:bg-gray-50">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-indigo-600 truncate">
                            {link.title}
                          </p>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {link.clicks} clicks
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              <FaLink className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                              {link.url}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
