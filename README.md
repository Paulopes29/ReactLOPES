# LOPES ALVES Paulo

# Objectifs de l'application web

' => Full hook '
' => organisation 'feature based' de la structure projet '
' => Sideffects '
' => React Routeur '
' => composants réutilisables '
' => signup/login avec store et routeur guard '


# Petits exemples

const myObject = {
toto: 'toto'
}

const { toto } myObject; 

const myArray = [1, 2, 4];

const[one, tow, three] = MyArray

const myHttpRepute = {...}

const {price, ...rest} = myHttpReponse

const myNewObject = { 
...myObject
}


# Definition d'un hook

' => Un hook permet de s'accrocher au cycle de vie des components '
  ' * Exemple '
  ' Le hook use effect s'accroche au componentdidmount '

# Les event handler
' Les event handler sont toujours passés en référence '

![image](https://user-images.githubusercontent.com/77489205/160775756-8ae02484-a5a3-41a2-84df-21b1fcdbf2d6.png)

![image](https://user-images.githubusercontent.com/77489205/160775859-bc48378f-1251-42f8-a749-6b7c176b7498.png)


# Use state
' il permet d'actualiser les views dynamiquement '
' On peut en utiliser une infinité '

![image](https://user-images.githubusercontent.com/77489205/160777488-4abfc281-f77b-4e88-8b11-f84ffc95e295.png)


# Components
' => On peut mettre une infinité de components , sa limite cest la ram du pc '



# Création d'un component

![image](https://user-images.githubusercontent.com/77489205/160776210-cf6e7886-455c-4746-bdac-9cf3ade205c7.png)

' Dans un component un ajoute tout le code jsx que l'on veut affciher dans la view, dans cet exemple on affiche juste hello '
' Il est aussi possible de passer des data pour les utiliser dans les views, les props. '

![image](https://user-images.githubusercontent.com/77489205/160776540-2837c963-1b86-47ce-b8e4-bbc8eaf63a80.png)

' Pour appeler la view en question on fait un import et ensuite on appel l'import comme si c'eatit une div. Si on a besoin de passer des donées pour remplir les props on l'appel sinon on appel juste la view' 

![image](https://user-images.githubusercontent.com/77489205/160776997-4973e77f-913b-473b-96d2-827faa5bbf69.png)

![image](https://user-images.githubusercontent.com/77489205/160777110-84910e26-1b63-4160-a110-7b6795544c7a.png)

# map
' Il permet de parcourir un array pour en créer un autre '
' Pour moi j'ai l'impression que ça fonctionne un peut comme un foreach en c# '


# Provider

![image](https://user-images.githubusercontent.com/77489205/160779734-0cb63dcd-2a0e-4fae-8d00-14c29d49e6da.png)

 Un provider pemet de donner accés a des elements, dans cette photo BrowserRouteur donne accés a la balise routeurs
 
 # Commande pour ajouter les icones de la sideBar
  yarn add react-pro-sidebar react-icons

# Taches réalisées pendant le projet

=> Side Bar 
=> Structuration de l'app.js pour afficher les differnts components
=> les routes
=> Mise en place des use state , props, import css 
=> Appel API (il manque la partie Css)






