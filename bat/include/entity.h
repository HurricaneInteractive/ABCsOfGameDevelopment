#include "raylib.h"
// #include "entity.h"
#include <string>
#include <iostream>

#pragma once
class Entity
{
private:
  Texture2D texture;
  float scale = 2.0;
public:
  Entity();
  void SetScale(float new_scale);
  void RenderAtPosition(Vector2 position);
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
  DrawTextureEx(texture, position, 0.0, scale, WHITE);
}

Entity::~Entity()
{
  UnloadTexture(texture);
}
