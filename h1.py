import pyfiglet
from colorama import Fore,Style,init
init(autoreset=True)
import winsound
import pyttsx3


text = " merry chirstmas amma and anna" 

for i in range(5):
     art = pyfiglet.figlet_format(f" From Hasini {text} -- {i} times",font="slant")

     print(Fore.GREEN + art)


winsound.Beep(500,1000)

for i in range(3):
    for j in range(3):
        winsound.Beep((i+1)*500,(j+1)*1000)




      # Snake game (Small but Fun)


    pygame.display.set_mode((600,400))

    snake =((10,10),(9,10),(8,10))

    new_head = (head_x + dx, head_y + dy)
    snake.insert(0, new_head)
    snake.pop()

    food = (random_x,randon_y)

    if new_head in snake:
        game_over = True

     GREEN = (255,0,255)     


