  # Snake game (Small but Fun)


import pygame
import random 
import sys



pygame.display.set_mode((600, 400))

snake = [(10, 10), (9, 10), (8, 10)]

new_head = "(head_x + dx, head_y + dy)"
snake.insert(0, new_head)
snake.pop()

food = (random_x, random_y)

if new_head in snake:
    game_over = True

    GREEN = (255, 0, 255)  # pink snake!