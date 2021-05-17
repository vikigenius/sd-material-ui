// @flow

import React, { Component } from 'react';
import { default as MuiGrid } from '@material-ui/core/Grid';

type Props = {
  /** Appbar ID */
  id: string,
  /** Children to render inside of the Appbar */
  children?: Node,
  /** The classes to be applied to this component. This keys in this object must be valid CSS rule
   * names, and the values must be strings for the classnames to be assigned to each rule name
   * Valid rule names are:
   *   root
   *   docked
   *   paper
   *   paperAnchorLeft
   *   paperAnchorRight
   *   paperAnchorTop
   *   paperAnchorBottom
   *   paperAnchorDockedLeft
   *   paperAnchorDockedTop
   *   paperAnchorDockedRight
   *   paperAnchorDockedBottom
   *   modal
   * */
  classes?: {
    root?: string,
    container?: string,
    item?: string,
    zeroMinWidth?: string,
    'direction-xs-column'?: string,
    'direction-xs-column-reverse'?: string,
    'direction-xs-row-reverse'?: string,
    'wrap-xs-nowrap'?: string,
    'wrap-xs-wrap-reverse'?: string,
    'align-items-xs-center'?: string,
    'align-items-xs-flex-start'?: string,
    'align-items-xs-flex-end'?: string,
    'align-items-xs-flex-baseline'?: string,
    'align-content-xs-center'?: string,
    'align-content-xs-flex-start'?: string,
    'align-content-xs-flex-end'?: string,
    'align-content-xs-space-between'?: string,
    'align-content-xs-space-around'?: string,
    'justify-xs-center'?: string,
    'justify-xs-flex-end'?: string,
    'justify-xs-space-between'?: string,
    'justify-xs-space-around'?: string,
    'justify-xs-space-evenly'?: string,
    'spacing-xs-1'?: string,
    'spacing-xs-2'?: string,
    'spacing-xs-3'?: string,
    'spacing-xs-4'?: string,
    'spacing-xs-5'?: string,
    'spacing-xs-6'?: string,
    'spacing-xs-7'?: string,
    'spacing-xs-8'?: string,
    'spacing-xs-9'?: string,
    'spacing-xs-10'?: string,
    'grid-xs-auto'?: string,
    'grid-xs-true'?: string,
    'grid-xs-1'?: string,
    'grid-xs-2'?: string,
    'grid-xs-3'?: string,
    'grid-xs-4'?: string,
    'grid-xs-5'?: string,
    'grid-xs-6'?: string,
    'grid-xs-7'?: string,
    'grid-xs-8'?: string,
    'grid-xs-9'?: string,
    'grid-xs-10'?: string,
    'grid-xs-11'?: string,
    'grid-xs-12'?: string,
  },
  /** CSS class name of the root element */
  className?: string,
  /** the component used for the root node. defaults to `div`. */
  component?: string,
  /** If true component will have flex container behavior. defaults to `false` */
  container?: boolean,
  /** Defines the flex-direction style property. defaults to `row` */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
  /** If true, the component will have the flex item behavior. defaults to `false` */
  item?: boolean,
  /** Defines the justify-content style property. defaults to `flex-start` */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly',
  /** Defines the number of grids the component is going to use. . defaults to `false` */
  lg?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  /** defines the number of grids the component is going to use. . defaults to `false` */
  md?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  /** defines the number of grids the component is going to use. . defaults to `false` */
  sm?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  /** Defines the space between the type item component. It can only be used on a type container component. defaults to `0` */
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
  /** Defines the flex-wrap style property. It's applied for all screen sizes. defaults to `wrap` */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
  /** Defines the number of grids the component is going to use. defaults to `false` */
  xl?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  /** Defines the number of grids the component is going to use. defaults to `false` */
  xs?: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  /** If true, it sets min-width: 0 on the item. defaults to `false` */
  zeroMinWidth?: boolean,
};


const defaultProps = {
  children: null,
  classes: {},
  className: '',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  spacing: 0,
  wrap: 'wrap',
  xl: false,
  xs: false,
  zeroMinWidth: false,
  setProps: () => {},
};


/** Material UI Grid component */
export default class Grid extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      id,
      classes,
      className,
      component,
      container,
      item,
      xl,
    } = this.props;

    const extra_props = {};
    if (container) {
      extra_props.direction = this.props.direction;
      extra_props.justify = this.props.justify;
      extra_props.spacing = this.props.spacing;
      extra_props.wrap = this.props.wrap;
    }
    if (item) {
      extra_props.lg = this.props.lg;
      extra_props.md = this.props.md;
      extra_props.sm = this.props.sm;
      extra_props.xs = this.props.xs;
      extra_props.zeroMinWidth = this.props.zeroMinWidth;
    }

    return (
      <div id={id}>
        <MuiGrid
          classes={classes}
          className={className}
          component={component}
          container={container}
          item={item}
          xl={xl}
          {...extra_props}
        >
          {this.props.children}
        </MuiGrid>
      </div>
    );
  }
}

Grid.defaultProps = defaultProps;
