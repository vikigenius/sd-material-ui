# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Grid(Component):
    """A Grid component.
Material UI Grid component

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Children to render inside of the Appbar.

- id (string; required):
    Appbar ID.

- className (string; default ''):
    CSS class name of the root element.

- classes (dict; optional):
    The classes to be applied to this component. This keys in this
    object must be valid CSS rule names, and the values must be
    strings for the classnames to be assigned to each rule name Valid
    rule names are:   root   docked   paper   paperAnchorLeft
    paperAnchorRight   paperAnchorTop   paperAnchorBottom
    paperAnchorDockedLeft   paperAnchorDockedTop
    paperAnchorDockedRight   paperAnchorDockedBottom   modal.

    `classes` is a dict with keys:

    - root (string; optional)

    - container (string; optional)

    - item (string; optional)

    - zeroMinWidth (string; optional)

    - direction-xs-column (string; optional)

    - direction-xs-column-reverse (string; optional)

    - direction-xs-row-reverse (string; optional)

    - wrap-xs-nowrap (string; optional)

    - wrap-xs-wrap-reverse (string; optional)

    - align-items-xs-center (string; optional)

    - align-items-xs-flex-start (string; optional)

    - align-items-xs-flex-end (string; optional)

    - align-items-xs-flex-baseline (string; optional)

    - align-content-xs-center (string; optional)

    - align-content-xs-flex-start (string; optional)

    - align-content-xs-flex-end (string; optional)

    - align-content-xs-space-between (string; optional)

    - align-content-xs-space-around (string; optional)

    - justify-xs-center (string; optional)

    - justify-xs-flex-end (string; optional)

    - justify-xs-space-between (string; optional)

    - justify-xs-space-around (string; optional)

    - justify-xs-space-evenly (string; optional)

    - spacing-xs-1 (string; optional)

    - spacing-xs-2 (string; optional)

    - spacing-xs-3 (string; optional)

    - spacing-xs-4 (string; optional)

    - spacing-xs-5 (string; optional)

    - spacing-xs-6 (string; optional)

    - spacing-xs-7 (string; optional)

    - spacing-xs-8 (string; optional)

    - spacing-xs-9 (string; optional)

    - spacing-xs-10 (string; optional)

    - grid-xs-auto (string; optional)

    - grid-xs-true (string; optional)

    - grid-xs-1 (string; optional)

    - grid-xs-2 (string; optional)

    - grid-xs-3 (string; optional)

    - grid-xs-4 (string; optional)

    - grid-xs-5 (string; optional)

    - grid-xs-6 (string; optional)

    - grid-xs-7 (string; optional)

    - grid-xs-8 (string; optional)

    - grid-xs-9 (string; optional)

    - grid-xs-10 (string; optional)

    - grid-xs-11 (string; optional)

    - grid-xs-12 (string; optional)

- component (string; default 'div'):
    the component used for the root node. defaults to `div`.

- container (boolean; default False):
    If True component will have flex container behavior. defaults to
    `False`.

- direction (default 'row'):
    Defines the flex-direction style property. defaults to `row`.

- item (boolean; default False):
    If True, the component will have the flex item behavior. defaults
    to `False`.

- justify (default 'flex-start'):
    Defines the justify-content style property. defaults to
    `flex-start`.

- lg (default False):
    Defines the number of grids the component is going to use. .
    defaults to `False`.

- md (default False):
    defines the number of grids the component is going to use. .
    defaults to `False`.

- sm (default False):
    defines the number of grids the component is going to use. .
    defaults to `False`.

- spacing (default 0):
    Defines the space between the type item component. It can only be
    used on a type container component. defaults to `0`.

- wrap (default 'wrap'):
    Defines the flex-wrap style property. It's applied for all screen
    sizes. defaults to `wrap`.

- xl (default False):
    Defines the number of grids the component is going to use.
    defaults to `False`.

- xs (default False):
    Defines the number of grids the component is going to use.
    defaults to `False`.

- zeroMinWidth (boolean; default False):
    If True, it sets min-width: 0 on the item. defaults to `False`."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.REQUIRED, classes=Component.UNDEFINED, className=Component.UNDEFINED, component=Component.UNDEFINED, container=Component.UNDEFINED, direction=Component.UNDEFINED, item=Component.UNDEFINED, justify=Component.UNDEFINED, lg=Component.UNDEFINED, md=Component.UNDEFINED, sm=Component.UNDEFINED, spacing=Component.UNDEFINED, wrap=Component.UNDEFINED, xl=Component.UNDEFINED, xs=Component.UNDEFINED, zeroMinWidth=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'classes', 'component', 'container', 'direction', 'item', 'justify', 'lg', 'md', 'sm', 'spacing', 'wrap', 'xl', 'xs', 'zeroMinWidth']
        self._type = 'Grid'
        self._namespace = 'sd_material_ui'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'classes', 'component', 'container', 'direction', 'item', 'justify', 'lg', 'md', 'sm', 'spacing', 'wrap', 'xl', 'xs', 'zeroMinWidth']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Grid, self).__init__(children=children, **args)
