import React from "react";
import { Link } from "react-router-dom";
import { getHostProjects } from "../../../api";

export default function HostProjects() {
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await getHostProjects();
        setProjects(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, []);

  const hostProjectsEls = projects.map((project) => (
    <Link
      to={project.id}
      key={project.id}
      className="host-project-link-wrapper"
    >
      <div className="flex items-center p-4 host-project-single" key={project.id}>
        <img
          src={project.imageUrl}
          alt={`Photo of ${project.name}`}
          className="h-16 w-16 rounded-md mr-4"
        />
        <div className="host-project-info">
          <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
          <p>${project.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (

    <div className="h-screen">
    <section className="text-gray-300 py-8 bg-gray-900 mt-6">
      <h1 className="px-4 text-2xl font-semibold text-gray-300 mb-4">Your assigned projects</h1>
      <div className="px-4 ">
        {projects.length > 0 ? (
          <section>{hostProjectsEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
    </div>
  );
}
