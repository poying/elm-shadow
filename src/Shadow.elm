module Shadow (shadow) where

{-| API to regiter and create custom element

@docs shadow
-}

import Html exposing ( Html )
import Native.Shadow


{-|
    import CustomElement exposing (create)

    user : UserModel -> Html
    user model = create "x-user" Nothing
      [ span [] [text model.name]
      , span [] [text model.email]
      ]
-}
shadow : Html -> List Html -> Html
shadow =
  Native.Shadow.shadow 
