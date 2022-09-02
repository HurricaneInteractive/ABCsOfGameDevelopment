#include "raylib.h"
// #include "entity.h"
#include <string>
#include <iostream>

#pragma once
class Entity
{
private:
  Texture2D texture;
  float tile_size = 16;
  float scale = 2.0;
public:
  Entity();
  void SetScale(float new_scale);
  void RenderAtPosition(Vector2 position);
  void RenderAtPosition(Vector2 position, Vector2 offset);
  void SetTexture(std::string resource);
  ~Entity();
};

Entity::Entity()
{
  std::cout << "not found" << std::endl;
}

void Entity::SetTexture(std::string resource)
{
  texture = LoadTexture(resource.c_str());
}

void Entity::SetScale(float new_scale)
{
  scale = new_scale;
}

void Entity::RenderAtPosition(Vector2 position)
{
  DrawTextureEx(texture, Vector2{
    position.x * (tile_size * scale),
    position.y * (tile_size * scale)
  }, 0.0, scale, WHITE);
}

void Entity::RenderAtPosition(Vector2 position, Vector2 offset)
{
  DrawTextureEx(texture, Vector2{
    position.x * (tile_size * scale) + offset.x,
    position.y * (tile_size * scale) + offset.y
  }, 0.0, scale, WHITE);
}

Entity::~Entity()
{
  UnloadTexture(texture);
}
