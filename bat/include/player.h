#include <vector>
#include <algorithm>

#include "raylib.h"
#include "entity.h"

#pragma once
class Player
{
private:
  Vector2 position;
  Entity entity;
  std::vector<Vector2> collisionMap;
public:
  Player() {};
  ~Player();
  void Init();
  void Update();
  void Draw();
  void Draw(Vector2 offset);
  void SetPosition(Vector2 position);
  void SetCollisionMap(std::vector<Vector2> _collisionMap)
  {
    collisionMap = _collisionMap;
  }
  bool CanMoveTo(Vector2 destination);
};

void Player::Init()
{
  entity.SetTexture("resources/bat.png");
  position = Vector2{ 64, 64 };
}

Player::~Player()
{
  entity.~Entity();
}

void Player::Draw()
{
  entity.RenderAtPosition(position);
}

void Player::Draw(Vector2 offset)
{
  entity.RenderAtPosition(position, offset);
}

bool Player::CanMoveTo(Vector2 destination)
{
  auto result = std::find_if(collisionMap.begin(), collisionMap.end(), [destination](Vector2 item) {
    return item.x == destination.x && item.y == destination.y;
  });

  return result == collisionMap.end() && destination.x >= 0 && destination.y >= 0;
}

void Player::Update()
{
  auto destination = position;

  switch (GetKeyPressed())
  {
    case KEY_A:
    case KEY_LEFT:
      destination = Vector2{
        destination.x - 1,
        destination.y
      };
      break;
    case KEY_D:
    case KEY_RIGHT:
      destination = Vector2{
        destination.x + 1,
        destination.y
      };
      break;
    case KEY_W:
    case KEY_UP:
      destination = Vector2{
        destination.x,
        destination.y - 1
      };
      break;
    case KEY_S:
    case KEY_DOWN:
      destination = Vector2{
        destination.x,
        destination.y + 1
      };
      break;
  }

  if (CanMoveTo(destination))
  {
    SetPosition(destination);
  }
}

void Player::SetPosition(Vector2 newPosition)
{
  position = newPosition;
}
