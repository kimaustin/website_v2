defmodule Portfolio.Repo.Migrations.CreateProjects do
  use Ecto.Migration

  def change do
    create table(:projects) do
      add :name, :string
      add :class, :string
      add :class_short, :string
      add :semester, :string
      add :desc, :text
      add :imgs, {:array, :string}
      add :tags, {:array, :string}
      add :type, :integer
      add :link, :string
      add :isCS, :boolean

      timestamps()
    end
  end

end
