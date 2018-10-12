import {Course} from './model/course';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {CourseActions, CourseActionTypes} from './course.actions';



export interface CoursesState extends EntityState<Course> {

  allCoursesLoaded:boolean;

}

/**
 * NOTE:
 * ng generate entity --name Entity --module entityFolder/entity.module.ts
 * @Entity main shape
 * interface EntityState<V> {
 *  ids: string[];
 *  entities: { [id: string]: V };
 * }
 * makes it very fast map approach in the store collection.
 * 
 * @adapter
 * In order to be able to use the other features of NgRx Entity, we need to first create an entity adapter.
 * The adapter is a utility class that provides a series of utility functions
 * that are designed to make it really simple to manipulate the entity state.
 *  adapter.getInitialState()
 *  adapter.addOne: add one entity to the collection
 *  adapter.addMany: add several entities
 *  adapter.addAll: replaces the whole collection with a new one
 *  adapter.removeOne: remove one entity
 *  adapter.removeMany: removes several entities
 *  adapter.removeAll: clear the whole collection
 *  adapter.updateOne: Update one existing entity
 *  adapter.updateMany: Update multiple existing entities
 *  adapter.upsertOne: Update or Insert one entity
 *  adapter.upsertMany: Update or Insert multiple entities
 *  adapter.getSelectors();
 */
export const adapter : EntityAdapter<Course> =
  createEntityAdapter<Course>();


export const initialCoursesState: CoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});



export function coursesReducer(state = initialCoursesState , action: CourseActions): CoursesState {

  switch(action.type) {

    case CourseActionTypes.CourseLoaded:

      return adapter.addOne(action.payload.course, state);

    case CourseActionTypes.AllCoursesLoaded:

      return adapter.addAll(action.payload.courses, {...state, allCoursesLoaded:true});

    case CourseActionTypes.CourseSaved:

      return adapter.updateOne(action.payload.course,state);

    default: {

      return state;
    }

  }
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();








