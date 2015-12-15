# elm-shadow

elm-shadow brings ShadowDom benefits to Elm developers.

### Example - Style encapsulation

```elm
import Shadow exposing (shadow)


styleSource : String
styleSource =
  """
  :host {
    box-shadow: 0 3px 10px rgba(0, 0, 0, .2);
  }

  span {
    color: red;
  }
  """


view : Int -> Html
view =
  (div [] [])
    [ span [] [text model]
    , style [] [text styleSource]
    ]
```
