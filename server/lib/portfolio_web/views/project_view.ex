defmodule PortfolioWeb.ProjectView do
  use PortfolioWeb, :view
  alias PortfolioWeb.ProjectView

  def render("index.json", %{projects: projects}) do
    %{data: render_many(projects, ProjectView, "project.json")}
  end

  def render("show.json", %{project: project}) do
    %{data: render_one(project, ProjectView, "project.json")}
  end

  def render("project.json", %{project: project}) do
    %{id: project.id,
      name: project.name,
      class: project.class,
      class_short: project.class_short, 
      semester: project.semester,
      desc: project.desc,
      imgs: project.imgs,
      tags: project.tags,
      type: project.type}
  end
end
