module Shadow (shadow) where

{-| API for creating ShadowRoot

@docs shadow
-}

import Html exposing ( Html )
import Native.Shadow


{-|
    import Shadow exposing (shadow)

    card : Model -> Html
    card model =
      shadow (div [] [])
        [ style [] [text ":host { color: red }"]
        , text model.content
        ]
-}
shadow : Html -> List Html -> Html
shadow =
  Native.Shadow.shadow 
