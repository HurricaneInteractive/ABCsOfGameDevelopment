#include "include/raylib.h"
#include "include/player.h"
#include "include/entity.h"
#include "include/level.h"

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
        player.Update();

        // Draw
        //----------------------------------------------------------------------------------
        BeginDrawing();
            DrawFPS(10, 10);
            ClearBackground(BLACK);

            auto offsets = level.Draw();
            goal.RenderAtPosition(goal_position, offsets);
            player.Draw(offsets);

        EndDrawing();
        //----------------------------------------------------------------------------------
    }

    // De-Initialization
    //--------------------------------------------------------------------------------------
    CloseWindow();        // Close window and OpenGL context
    //--------------------------------------------------------------------------------------

    return 0;
}
