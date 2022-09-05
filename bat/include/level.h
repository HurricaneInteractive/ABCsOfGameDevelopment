#include <string>
#include <vector>
#include <map>
#include <iostream>
#include <sstream>
#include "raylib.h"
#include "player.h"
#include "entity.h"

typedef std::vector<std::vector<char>> Layer;

class Level
{
private:
  int width = 0;
  int height = 0;
  int xOffset = 0;
  int yOffset = 0;
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
  Vector2 Draw();
  void DrawDarkness(Vector2 playerPosition);
  Vector2 GetEntityPosition(char entity);
  std::vector<Vector2> BuildCollisionMap();
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
  int i = 0;
  
  while (std::getline(iss, line))
  {
    if (i == 0)
    {
      width = std::stoi(line);
      i++;
      continue;
    }

    if (i == 1)
    {
      height = std::stoi(line);
      i++;
      continue;
    }

    if (line.front() == ':')
    {
      key = line;
      layers.insert(std::pair<std::string, Layer>(key, {}));
      i++;
      continue;
    }

    std::vector<char> row;
    for (int i = 0; i < line.size(); i++)
    {
      row.push_back(line[i]);
    }

    layers.at(key).push_back(row);
    i++;
  }
}

void Level::Load(std::string _levelName)
{
  levelName = _levelName;

  layers.clear();
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
        if (map[i][j] == ',' || map[i][j] == 'c') continue;

        try
        {
          auto texture = assets.at(map[i][j]);
          DrawTextureEx(
            texture,
            Vector2 {
              (float) (j * tileSize) + xOffset,
              (float) (i * tileSize) + yOffset
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

Vector2 Level::Draw()
{
  auto screenWidth = GetScreenWidth();
  auto screenHeight = GetScreenHeight();
  xOffset = (screenWidth / 2) - ((width * tileSize) / 2);
  yOffset = (screenHeight / 2) - ((height * tileSize) / 2);
  
  DrawLayer(":floor");
  DrawLayer(":barrels");

  return Vector2{ (float)xOffset, (float)yOffset };
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
        (float) j,
        (float) i
      };
    }
  }

  return Vector2{0,0};
}

std::vector<Vector2> Level::BuildCollisionMap()
{
  std::vector<Vector2> collisionMap;

  try
  {
    auto map = layers.at(":barrels");

    for (int i = 0; i < map.size(); i++)
    {
      for (int j = 0; j < map[i].size(); j++)
      {
        if (map[i][j] == 'b' || map[i][j] == 'c')
        {
          collisionMap.push_back(Vector2{ (float)j, (float)i });
        }
      }
    }

    return collisionMap;
  }
  catch(const std::exception& e)
  {
    std::cerr << "Barrels map not found\n";
    std::cerr << e.what() << '\n';
    return collisionMap;
  }
}

void Level::DrawDarkness(Vector2 playerPosition)
{
  try
  {
    auto darkness = layers.at(":floor");

    for (int i = 0; i < darkness.size(); i++)
    {
      for (int j = 0; j < darkness[i].size(); j++)
      {
        if (playerPosition.x == j && playerPosition.y == i) continue;
        DrawRectangle((j * tileSize) + xOffset, (i * tileSize) + yOffset, tileSize, tileSize, BLACK);
      }
    }
  }
  catch(const std::exception& e)
  {
    std::cerr << "Guessing the layer doesn't exist\n";
    std::cerr << e.what() << '\n';
  }
}
