defmodule Portfolio.ProjectsTest do
  use Portfolio.DataCase

  alias Portfolio.Projects

  describe "projects" do
    alias Portfolio.Projects.Project

    @valid_attrs %{class: "some class", desc: "some desc", imgs: [], name: "some name", semester: "some semester", tags: []}
    @update_attrs %{class: "some updated class", desc: "some updated desc", imgs: [], name: "some updated name", semester: "some updated semester", tags: []}
    @invalid_attrs %{class: nil, desc: nil, imgs: nil, name: nil, semester: nil, tags: nil}

    def project_fixture(attrs \\ %{}) do
      {:ok, project} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Projects.create_project()

      project
    end

    test "list_projects/0 returns all projects" do
      project = project_fixture()
      assert Projects.list_projects() == [project]
    end

    test "get_project!/1 returns the project with given id" do
      project = project_fixture()
      assert Projects.get_project!(project.id) == project
    end

    test "create_project/1 with valid data creates a project" do
      assert {:ok, %Project{} = project} = Projects.create_project(@valid_attrs)
      assert project.class == "some class"
      assert project.desc == "some desc"
      assert project.imgs == []
      assert project.name == "some name"
      assert project.semester == "some semester"
      assert project.tags == []
    end

    test "create_project/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Projects.create_project(@invalid_attrs)
    end

    test "update_project/2 with valid data updates the project" do
      project = project_fixture()
      assert {:ok, %Project{} = project} = Projects.update_project(project, @update_attrs)
      assert project.class == "some updated class"
      assert project.desc == "some updated desc"
      assert project.imgs == []
      assert project.name == "some updated name"
      assert project.semester == "some updated semester"
      assert project.tags == []
    end

    test "update_project/2 with invalid data returns error changeset" do
      project = project_fixture()
      assert {:error, %Ecto.Changeset{}} = Projects.update_project(project, @invalid_attrs)
      assert project == Projects.get_project!(project.id)
    end

    test "delete_project/1 deletes the project" do
      project = project_fixture()
      assert {:ok, %Project{}} = Projects.delete_project(project)
      assert_raise Ecto.NoResultsError, fn -> Projects.get_project!(project.id) end
    end

    test "change_project/1 returns a project changeset" do
      project = project_fixture()
      assert %Ecto.Changeset{} = Projects.change_project(project)
    end
  end
end
