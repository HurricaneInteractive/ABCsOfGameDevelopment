#include "include/raylib.h"
#include "include/player.h"
#include "include/entity.h"
#include "include/level.h"
#include <string.h>

//------------------------------------------------------------------------------------
// Program main entry point
//------------------------------------------------------------------------------------
int main(void)
{
    // Initialization
    //--------------------------------------------------------------------------------------
    Player player;
    Entity goal;
    Level level;
    const int screenWidth = 480;
    const int screenHeight = 480;
    const float SCALE = 2;
    float startCountdown = 5;
    bool canMove = false;
    bool beatLevel = false;

    InitWindow(screenWidth, screenHeight, "B is for Bat");

    SetTargetFPS(60);

    player.Init();
    goal.SetTexture("resources/rat.png");
    level.Init();
    level.Load("0");

    auto goal_position = level.GetEntityPosition('x');
    player.SetPosition(level.GetEntityPosition('z'));
    player.SetCollisionMap(level.BuildCollisionMap());

    //--------------------------------------------------------------------------------------

    // Main game loop
    while (!WindowShouldClose())    // Detect window close button or ESC key
    {
        // Update
        //----------------------------------------------------------------------------------
        auto keyPressed = GetKeyPressed();
        if (canMove)
        {
            if (!beatLevel)
                player.Update(keyPressed);
        }
        else
        {
            startCountdown -= GetFrameTime();

            if (startCountdown < 1)
                canMove = true;
        }

        // Draw
        //----------------------------------------------------------------------------------
        BeginDrawing();
            ClearBackground(BLACK);

            if (!canMove)
            {
                auto text = std::to_string((int) startCountdown).c_str();
                auto width = MeasureText(text, 20);
                DrawText(text, GetScreenWidth() / 2 - width / 2, GetScreenHeight() - 30, 20, WHITE);
            }

            auto offsets = level.Draw();
            if (!beatLevel) goal.RenderAtPosition(goal_position, offsets);
            player.Draw(offsets);
            
            if (canMove && !beatLevel)
                level.DrawDarkness(player.GetPosition());

            if (beatLevel)
            {
                auto text = "Good Job!";
                auto width = MeasureText(text, 50);
                DrawText(text, GetScreenWidth() / 2 - width / 2, 50, 50, WHITE);
            }
        EndDrawing();
        //----------------------------------------------------------------------------------

        if (player.GetPosition().x == goal_position.x && player.GetPosition().y == goal_position.y)
            beatLevel = true;
    }

    // De-Initialization
    //--------------------------------------------------------------------------------------
    CloseWindow();        // Close window and OpenGL context
    //--------------------------------------------------------------------------------------

    return 0;
}
