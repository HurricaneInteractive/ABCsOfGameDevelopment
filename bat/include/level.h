#include <string>
#include <vector>
#include <map>
#include <iostream>
#include <sstream>
#include <tuple>
#include "raylib.h"
#include "player.h"
#include "entity.h"

typedef std::vector<std::vector<char>> Layer;

class Level
{
private:
  int tileSize = 32;
  std::string levelName;
  std::map<std::string, Layer> layers;
  void LoadLevel();
  void DrawLayer(std::string layer);
  std::map<char, Texture2D> assets;
public:
  Level();
  ~Level();
  void Init();
  void Load(std::string levelName);
  void Draw();
  Vector2 GetEntityPosition(char entity);
};

Level::Level()
{
}

Level::~Level()
{
}

void Level::Init()
{
  auto barrel = LoadTexture("resources/barrel.png");
  auto floor = LoadTexture("resources/map/floor.png");

  assets.insert(std::pair<char, Texture2D>('.', floor));
  assets.insert(std::pair<char, Texture2D>('b', barrel));
}

void Level::LoadLevel()
{
  auto fileName = "resources/levels/" + levelName + ".txt";
  auto levelData = LoadFileText(fileName.c_str());
  auto levelAsString = std::string(levelData);

  std::istringstream iss(levelAsString);
  std::string line;
  std::string key = ":l0";
  
  while (std::getline(iss, line))
  {
    if (line.front() == ':')
    {
      key = line;
      layers.insert(std::pair<std::string, Layer>(key, {}));
      continue;
    }

    std::vector<char> row;
    for (int i = 0; i < line.size(); i++)
    {
      row.push_back(line[i]);
    }

    layers.at(key).push_back(row);
  }
}

void Level::Load(std::string _levelName)
{
  levelName = _levelName;

  layers.empty();
  this->LoadLevel();
}

void Level::DrawLayer(std::string layer)
{
  try
  {
    auto map = layers.at(layer);

    for (int i = 0; i < map.size(); i++)
    {
      for (int j = 0; j < map[i].size(); j++)
      {
        if (map[i][j] == ',') continue;

        try
        {
          auto texture = assets.at(map[i][j]);
          DrawTextureEx(
            texture,
            Vector2 {
              (float) j * tileSize,
              (float) i * tileSize
            },
            0,
            2,
            WHITE
          );
        }
        catch(const std::exception& e)
        {
          std::cerr << "Unknown tile: " << map[i][j] << std::endl;
          std::cerr << e.what() << '\n';
        }
      }
    }
  }
  catch(const std::exception& e)
  {
    std::cerr << "Guessing the layer doesn't exist\n";
    std::cerr << e.what() << '\n';
  }
}

void Level::Draw()
{
  DrawLayer(":floor");
  DrawLayer(":barrels");
}

Vector2 Level::GetEntityPosition(char entity)
{
  auto entityLayer = layers.at(":entities");

  for (int i = 0; i < entityLayer.size(); i++)
  {
    for (int j = 0; j < entityLayer[i].size(); j++)
    {
      auto character = entityLayer[i][j];

      if (character != entity) continue;

      // TODO: Offsets to align with a centered room
      return Vector2{
        (float) j * tileSize,
        (float) i * tileSize
      };
    }
  }

  return Vector2{0,0};
}
