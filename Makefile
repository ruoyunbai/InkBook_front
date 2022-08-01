pushdist:
	cd ./dist&git add *&git commit -m "auto push"&git push -f

git:
	git add *&git commit -m "auto push"&git pull &git push 
	
