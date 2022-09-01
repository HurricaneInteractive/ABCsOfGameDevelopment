#include "raylib.h"
#include "entity.h"
#include <iostream>

#pragma once
class Player
{
private:
  Vector2 position;
  Entity entity;
public:
  Player() {};
  ~Player();
  void Init();
  void Update();
  void Draw();
  void SetPosition(Vector2 position);
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

void Player::Update()
{
  switch (GetKeyPressed())
  {
    case KEY_A:
    case KEY_LEFT:
      position.x -= 32;
      break;
    case KEY_D:
    case KEY_RIGHT:
      position.x += 32;
      break;
    case KEY_W:
    case KEY_UP:
      position.y -= 32;
      break;
    case KEY_S:
    case KEY_DOWN:
      position.y += 32;
      break;
  }
}

void Player::SetPosition(Vector2 newPosition)
{
  position = newPosition;
}
