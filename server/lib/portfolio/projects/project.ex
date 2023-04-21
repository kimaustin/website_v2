defmodule Portfolio.Projects.Project do
  use Ecto.Schema
  import Ecto.Changeset

  schema "projects" do
    field :class, :string
    field :class_short, :string
    field :desc, :string
    field :imgs, {:array, :string}
    field :name, :string
    field :semester, :string
    field :tags, {:array, :string}
    field :type, :integer
    field :link, :string
    field :isCS, :boolean

    timestamps()
  end

  @doc false
  def changeset(project, attrs) do
    project
    |> cast(attrs, [:name, :class, :class_short, :semester, :desc, :imgs, :tags, :type, :link, :isCS])
    |> validate_required([:name, :class, :class_short, :semester, :desc, :imgs, :tags, :type, :link, :isCS])
  end
end
